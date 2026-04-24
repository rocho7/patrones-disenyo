interface Clothing {
  manufacture(): void;
  size(size: "S" | "M" | "L"): void;
  price(): void;
}

class Shirt implements Clothing {
  sizeShirt: string = "";
  manufacture(): void {
    console.log("%cManufacturando camisa... ", "color: white; background-color: #007acc;");
  }

  size(size: "S" | "M" | "L"): void {
    this.sizeShirt = size;
    console.log(`Talla de la camisa: ${size}`);
  }

  price(): void {
    if (this.sizeShirt === "S") {
      console.log("Precio de la camisa: $20");
    } else if (this.sizeShirt === "M") {
      console.log("Precio de la camisa: $25");
    } else if (this.sizeShirt === "L") {
      console.log("Precio de la camisa: $30");
    } else {
      console.log("Talla no válida. No se puede determinar el precio.");
    }
  }
}

abstract class ClothingFactory {
  protected abstract createClothing(): Clothing;

  orderClothing(size: "S" | "M" | "L"): void {
    const clothing = this.createClothing();
    clothing.manufacture();
    clothing.size(size);
    clothing.price();
  }
}

class ShirtFactory extends ClothingFactory {
  protected createClothing(): Clothing {
    return new Shirt();
  }
}

function mainFactory3() {
  const clothingType = prompt("¿Qué tipo de prenda deseas? (shirt)")?.toLowerCase();

  let factory: ClothingFactory | null = null;

  if (clothingType === "shirt") {
    factory = new ShirtFactory();
  }

  factory?.orderClothing("M");
}

mainFactory3();
