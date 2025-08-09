import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeExperiments = () => {
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [activeTab, setActiveTab] = useState('code');

  const experiments = [
    {
      id: 1,
      title: "Quantum State Simulator",
      category: "Algorithm",
      difficulty: "Advanced",
      description: `A JavaScript implementation of quantum state simulation.\nDemonstrates quantum superposition and entanglement concepts.\nEducational tool for understanding quantum computing principles.`,
      problem: "Need to visualize quantum states for educational purposes",
      solution: "Created a browser-based quantum simulator using complex number mathematics",
      outcome: "Successfully demonstrates quantum concepts with interactive visualization",
      code: `class QuantumState {
  constructor(amplitudes) {
    this.amplitudes = amplitudes;
    this.normalize();
  }

  normalize() {
    const sum = this.amplitudes.reduce((acc, amp) => 
      acc + amp.real * amp.real + amp.imag * amp.imag, 0);
    const norm = Math.sqrt(sum);
    
    this.amplitudes = this.amplitudes.map(amp => ({
      real: amp.real / norm,
      imag: amp.imag / norm
    }));
  }

  measure() {
    const probabilities = this.amplitudes.map(amp => 
      amp.real * amp.real + amp.imag * amp.imag);
    
    const random = Math.random();
    let cumulative = 0;
    
    for (let i = 0; i < probabilities.length; i++) {
      cumulative += probabilities[i];
      if (random <= cumulative) {
        return i;
      }
    }
    return probabilities.length - 1;
  }

  applyGate(gate, qubit) {
    // Apply quantum gate to specific qubit
    const newAmplitudes = [...this.amplitudes];
    
    for (let i = 0; i < newAmplitudes.length; i++) {
      if ((i >> qubit) & 1) {
        // Apply gate transformation
        const oldAmp = newAmplitudes[i];
        newAmplitudes[i] = {
          real: gate[1][0] * oldAmp.real - gate[1][1] * oldAmp.imag,
          imag: gate[1][0] * oldAmp.imag + gate[1][1] * oldAmp.real
        };
      }
    }
    
    return new QuantumState(newAmplitudes);
  }
}

// Usage example
const qubit = new QuantumState([
  { real: 1, imag: 0 },  // |0⟩ state
  { real: 0, imag: 0 }   // |1⟩ state
]);

// Apply Hadamard gate for superposition
const hadamard = [[1/Math.sqrt(2), 1/Math.sqrt(2)], 
                  [1/Math.sqrt(2), -1/Math.sqrt(2)]];
const superposition = qubit.applyGate(hadamard, 0);

console.log('Measurement result:', superposition.measure());`,
      technologies: ["JavaScript", "Complex Numbers", "Quantum Physics", "Mathematics"],
      lessons: [
        "Complex number arithmetic in JavaScript",
        "Quantum state representation and manipulation",
        "Probability calculations and random sampling"
      ],
      improvements: [
        "Add more quantum gates (Pauli-X, Y, Z)",
        "Implement multi-qubit entanglement",
        "Create visual representation of Bloch sphere"
      ]
    },
    {
      id: 2,
      title: "Neural Network from Scratch",
      category: "Machine Learning",
      difficulty: "Advanced",
      description: `Pure JavaScript neural network implementation.\nNo external libraries, built from mathematical foundations.\nIncludes backpropagation and gradient descent optimization.`,
      problem: "Understanding neural networks requires building one from scratch",
      solution: "Implemented complete neural network with matrix operations in vanilla JS",
      outcome: "Successfully trained network to recognize patterns with 85% accuracy",
      code: `class NeuralNetwork {
  constructor(layers) {
    this.layers = layers;
    this.weights = [];
    this.biases = [];
    this.initializeWeights();
  }

  initializeWeights() {
    for (let i = 0; i < this.layers.length - 1; i++) {
      const weight = [];
      const bias = [];
      
      for (let j = 0; j < this.layers[i + 1]; j++) {
        const neuronWeights = [];
        for (let k = 0; k < this.layers[i]; k++) {
          neuronWeights.push(Math.random() * 2 - 1);
        }
        weight.push(neuronWeights);
        bias.push(Math.random() * 2 - 1);
      }
      
      this.weights.push(weight);
      this.biases.push(bias);
    }
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  sigmoidDerivative(x) {
    return x * (1 - x);
  }

  feedForward(inputs) {
    let activations = [inputs];
    
    for (let i = 0; i < this.weights.length; i++) {
      const layerOutput = [];
      
      for (let j = 0; j < this.weights[i].length; j++) {
        let sum = this.biases[i][j];
        
        for (let k = 0; k < this.weights[i][j].length; k++) {
          sum += this.weights[i][j][k] * activations[i][k];
        }
        
        layerOutput.push(this.sigmoid(sum));
      }
      
      activations.push(layerOutput);
    }
    
    return activations;
  }

  train(inputs, targets, learningRate = 0.1) {
    const activations = this.feedForward(inputs);
    const errors = [];
    
    // Calculate output layer error
    const outputError = [];
    const outputLayer = activations[activations.length - 1];
    
    for (let i = 0; i < outputLayer.length; i++) {
      outputError.push(targets[i] - outputLayer[i]);
    }
    errors.push(outputError);
    
    // Backpropagate errors
    for (let i = this.weights.length - 2; i >= 0; i--) {
      const layerError = [];
      
      for (let j = 0; j < this.layers[i + 1]; j++) {
        let error = 0;
        for (let k = 0; k < errors[0].length; k++) {
          error += errors[0][k] * this.weights[i + 1][k][j];
        }
        layerError.push(error);
      }
      
      errors.unshift(layerError);
    }
    
    // Update weights and biases
    for (let i = 0; i < this.weights.length; i++) {
      for (let j = 0; j < this.weights[i].length; j++) {
        const delta = errors[i + 1][j] * 
          this.sigmoidDerivative(activations[i + 1][j]) * learningRate;
        
        this.biases[i][j] += delta;
        
        for (let k = 0; k < this.weights[i][j].length; k++) {
          this.weights[i][j][k] += delta * activations[i][k];
        }
      }
    }
  }

  predict(inputs) {
    const activations = this.feedForward(inputs);
    return activations[activations.length - 1];
  }
}

// Usage example
const nn = new NeuralNetwork([2, 4, 1]);

// Training data for XOR function
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

// Train the network
for (let epoch = 0; epoch < 10000; epoch++) {
  trainingData.forEach(data => {
    nn.train(data.input, data.output);
  });
}

// Test the network
trainingData.forEach(data => {
  const prediction = nn.predict(data.input);
  console.log(\`Input: \${data.input}, Expected: \${data.output}, Predicted: \${prediction}\`);
});`,
      technologies: ["JavaScript", "Linear Algebra", "Calculus", "Machine Learning"],
      lessons: [
        "Matrix operations and mathematical foundations",
        "Gradient descent and backpropagation algorithms",
        "Activation functions and their derivatives"
      ],
      improvements: [
        "Add different activation functions (ReLU, Tanh)",
        "Implement regularization techniques",
        "Add momentum and adaptive learning rates"
      ]
    },
    {
      id: 3,
      title: "Blockchain Implementation",
      category: "Cryptography",
      difficulty: "Intermediate",
      description: `Simple blockchain implementation in JavaScript.\nIncludes proof-of-work mining and transaction validation.\nDemonstrates core blockchain concepts and cryptography.`,
      problem: "Understanding blockchain technology requires hands-on implementation",
      solution: "Built a functional blockchain with mining, transactions, and validation",
      outcome: "Created educational blockchain that demonstrates key concepts clearly",
      code: `const crypto = require('crypto');

class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.previousHash + this.timestamp + 
              JSON.stringify(this.transactions) + this.nonce)
      .digest('hex');
  }

  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join('0');
    
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    
    console.log(\`Block mined: \${this.hash}\`);
  }

  hasValidTransactions() {
    return this.transactions.every(tx => tx.isValid());
  }
}

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
  }

  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.fromAddress + this.toAddress + 
              this.amount + this.timestamp)
      .digest('hex');
  }

  signTransaction(signingKey) {
    if (signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('You cannot sign transactions for other wallets!');
    }

    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, 'base64');
    this.signature = sig.toDER('hex');
  }

  isValid() {
    if (this.fromAddress === null) return true;

    if (!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }

    const publicKey = crypto.createVerify('SHA256');
    publicKey.update(this.calculateHash());
    
    return publicKey.verify(this.fromAddress, this.signature, 'hex');
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block(Date.parse('2024-01-01'), [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress) {
    const rewardTransaction = new Transaction(
      null, miningRewardAddress, this.miningReward
    );
    this.pendingTransactions.push(rewardTransaction);

    const block = new Block(
      Date.now(),
      this.pendingTransactions,
      this.getLatestBlock().hash
    );

    block.mineBlock(this.difficulty);
    
    console.log('Block successfully mined!');
    this.chain.push(block);
    this.pendingTransactions = [];
  }

  createTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    if (!transaction.isValid()) {
      throw new Error('Cannot add invalid transaction to chain');
    }

    this.pendingTransactions.push(transaction);
  }

  getBalance(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!currentBlock.hasValidTransactions()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

// Usage example
const myBlockchain = new Blockchain();

// Create transactions
const tx1 = new Transaction('address1', 'address2', 100);
const tx2 = new Transaction('address2', 'address1', 50);

myBlockchain.createTransaction(tx1);
myBlockchain.createTransaction(tx2);

console.log('Starting the miner...');
myBlockchain.minePendingTransactions('miner-address');

console.log('Balance of miner:', myBlockchain.getBalance('miner-address'));
console.log('Is blockchain valid?', myBlockchain.isChainValid());`,
      technologies: ["JavaScript", "Cryptography", "SHA-256", "Digital Signatures"],
      lessons: [
        "Cryptographic hashing and proof-of-work",
        "Digital signatures and transaction validation",
        "Blockchain structure and consensus mechanisms"
      ],
      improvements: [
        "Add smart contract functionality",
        "Implement different consensus algorithms",
        "Create a peer-to-peer network layer"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experiments', icon: 'Flask' },
    { id: 'Algorithm', name: 'Algorithms', icon: 'Cpu' },
    { id: 'Machine Learning', name: 'ML/AI', icon: 'Brain' },
    { id: 'Cryptography', name: 'Cryptography', icon: 'Shield' }
  ];

  const difficultyColors = {
    'Basic': 'text-success bg-success/10 border-success/30',
    'Intermediate': 'text-warning bg-warning/10 border-warning/30',
    'Advanced': 'text-error bg-error/10 border-error/30'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Code Experiments</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Deep dives into complex algorithms and innovative solutions. Each experiment includes 
          complete source code, detailed explanations, and lessons learned.
        </p>
      </div>
      {/* Experiments Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments?.map((experiment) => (
          <div
            key={experiment?.id}
            onClick={() => setSelectedExperiment(experiment)}
            className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Icon name="Flask" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">{experiment?.category}</span>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium border ${difficultyColors?.[experiment?.difficulty]}`}>
                {experiment?.difficulty}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {experiment?.title}
            </h4>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {experiment?.description?.split('\n')?.[0]}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {experiment?.technologies?.slice(0, 3)?.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-border"
                >
                  {tech}
                </span>
              ))}
              {experiment?.technologies?.length > 3 && (
                <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded border border-border">
                  +{experiment?.technologies?.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">View Details</span>
              <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        ))}
      </div>
      {/* Experiment Detail Modal */}
      {selectedExperiment && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{selectedExperiment?.title}</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-muted-foreground">{selectedExperiment?.category}</span>
                  <div className={`px-2 py-1 rounded text-xs font-medium border ${difficultyColors?.[selectedExperiment?.difficulty]}`}>
                    {selectedExperiment?.difficulty}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedExperiment(null)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <div className="flex border-b border-border">
              {['code', 'analysis', 'lessons']?.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${
                    activeTab === tab
                      ? 'text-primary border-primary' :'text-muted-foreground border-transparent hover:text-foreground'
                  }`}
                >
                  {tab === 'code' && 'Source Code'}
                  {tab === 'analysis' && 'Problem Analysis'}
                  {tab === 'lessons' && 'Lessons Learned'}
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {activeTab === 'code' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Implementation</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Copy"
                      iconPosition="left"
                      onClick={() => navigator.clipboard?.writeText(selectedExperiment?.code)}
                    >
                      Copy Code
                    </Button>
                  </div>
                  <pre className="bg-deep-focus rounded-lg p-4 overflow-x-auto text-sm font-code">
                    <code className="text-foreground">{selectedExperiment?.code}</code>
                  </pre>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedExperiment?.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Complexity Level</h5>
                      <div className={`inline-block px-3 py-1 rounded border ${difficultyColors?.[selectedExperiment?.difficulty]}`}>
                        {selectedExperiment?.difficulty}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analysis' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Problem Statement</h4>
                    <p className="text-muted-foreground">{selectedExperiment?.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Solution Approach</h4>
                    <p className="text-muted-foreground">{selectedExperiment?.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Outcome & Results</h4>
                    <p className="text-muted-foreground">{selectedExperiment?.outcome}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Description</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {selectedExperiment?.description}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'lessons' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Learnings</h4>
                    <ul className="space-y-3">
                      {selectedExperiment?.lessons?.map((lesson, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Future Improvements</h4>
                    <ul className="space-y-3">
                      {selectedExperiment?.improvements?.map((improvement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="ArrowRight" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExperiments;