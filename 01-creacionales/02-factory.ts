/*
 * Patrón de Diseño: Factory Method
 * El patrón Factory Method permite crear objeto sin especificar
 * la clase exacta del objeto que se va a crear.
 *
 * Ejemplo: Supongamos que estamos desarrollando una aplicación de transporte
 * que puede manejar diferentes tipos de vehículos (coche, bicicleta, camión).
 * En lugar de crear instancias de cada tipo de vehículo directamente, podemos
 * usar una fábrica para crear los objetos según el tipo solicitado.
 */

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("%cPreparando hamburguesa de pollo... ", "color: white; background-color: #007acc;");
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("%cPreparando hamburguesa de res... ", "color: white; background-color: #007acc;");
  }
}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

function mainFactory() {
  const burgerType = prompt("¿Qué tipo de hamburguesa deseas? (chicken/beef)")?.toLowerCase();

  let restaurant: Restaurant | null = null;

  if (burgerType === "chicken") {
    restaurant = new ChickenRestaurant();
  } else if (burgerType === "beef") {
    restaurant = new BeefRestaurant();
  }

  if (!restaurant) {
    console.error('Tipo de hamburguesa no válido. Usa "chicken" o "beef".');
    return;
  }

  restaurant.orderHamburger();
}

mainFactory();
