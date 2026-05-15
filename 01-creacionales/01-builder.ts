class Computer {
  public cpu: string = "cpu - no defined";
  public ram: string = "ram - no defined";
  public storage: string = "storage - no defined";
  public gpu: string = "gpu - no defined";

  displayConfiguration(): void {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`GPU: ${this.gpu}`);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

// Uso del Builder
function mainBuilder() {
  const basicComputerBuilder = new ComputerBuilder();

  basicComputerBuilder
    .setCPU("Intel Core i5")
    .setRAM("8GB")
    .setStorage("256GB SSD")
    .setGPU("Integrated Graphics")
    .build()
    .displayConfiguration();
}

mainBuilder();
