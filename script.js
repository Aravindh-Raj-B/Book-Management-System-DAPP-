const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // Insert your contract address here
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "bookId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "author",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "BookAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "bookId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_author",
        "type": "string"
      }
    ],
    "name": "addBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "books",
    "outputs": [
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "author",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_bookId",
        "type": "uint256"
      }
    ],
    "name": "getBookDetails",
    "outputs": [
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "author",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalBooks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_bookId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]; // Insert your contract ABI here
const web3 = new Web3('http://localhost:8545');

const bookContract = new web3.eth.Contract(contractABI, contractAddress);

async function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  await bookContract.methods.addBook(title, author).send({ from: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'});
  alert("Book added successfully!");
}

async function getBookDetails() {
  const bookId = document.getElementById("bookId").value;
  const details = await bookContract.methods.getBookDetails(bookId).call();
  document.getElementById("bookTitle").innerText = details[0];
  document.getElementById("bookAuthor").innerText = details[1];
  document.getElementById("bookOwner").innerText = details[2];
}
async function transferOwnership() {
  const bookId = document.getElementById("transferBookId").value;
  const newOwner = document.getElementById("newOwner").value;
  await bookContract.methods.transferOwnership(bookId, newOwner).send({ from: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199' });
  alert("Ownership transferred successfully!");
}
