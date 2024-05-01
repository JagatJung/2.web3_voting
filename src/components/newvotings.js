const loadBlockchainData = async ()=> {

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contract1 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, provider);
    

    const provide_new = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
    const contract2 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer);
    // const data = await contract2.setCount(10);
    // await data.wait();
    const title = "Election Title";
    const description = "Election Description";
    const validity = 5; // Example validity period
    const creator = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; 
    const elect = await contract2.setSingleElection(title, description,validity,creator);
    await elect.wait();

    const data1 = await contract1.getCount();
    console.log(data1);


  } 