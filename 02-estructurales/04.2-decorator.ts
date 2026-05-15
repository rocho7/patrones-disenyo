interface Character {
  getDescription(): string;
  getStats(): { attack: number; defense: number };
}

class BasicCharacter implements Character {
  getDescription(): string {
    return "Personaje básico";
  }
  getStats(): { attack: number; defense: number } {
    return { attack: 10, defense: 10 };
  }
}

abstract class CharacterDecorator implements Character {
  protected character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  getDescription(): string {
    return this.character.getDescription();
  }
  getStats(): { attack: number; defense: number } {
    return this.character.getStats();
  }
}

class HelmetDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * Casco equipado* ";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 5 };
  }
}

class ShieldDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * Escudo equipado* ";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 10 };
  }
}

class SwordDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * Espada equipada* ";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 7, defense: stats.defense };
  }
}

class RingDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * Anillo equipado* ";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 3 };
  }
}

function mainDecorator() {
  let character: Character = new BasicCharacter();
  console.log("%cPesonaje inicial ", "color: white; background-color: #007acc;", character.getDescription());
  console.log("%cEstadisticas ", "background: purple; color: white; display: block;", character.getStats());

  character = new HelmetDecorator(character);
  console.log("%cDespués de equipar casco ", "color: white; background-color: #007acc;", character.getDescription());
  console.log("%cEstadisticas ", "background: purple; color: white; display: block;", character.getStats());

  character = new ShieldDecorator(character);
  console.log("%cDespués de equipar escudo ", "color: white; background-color: #007acc;", character.getDescription());
  console.log("%cEstadisticas ", "background: purple; color: white; display: block;", character.getStats());

  character = new SwordDecorator(character);
  console.log("%cDespués de equipar espada ", "color: white; background-color: #007acc;", character.getDescription());
  console.log("%cEstadisticas ", "background: purple; color: white; display: block;", character.getStats());

  character = new RingDecorator(character);
  console.log("%cDespués de equipar anillo ", "color: white; background-color: #007acc;", character.getDescription());
  console.log("%cEstadisticas ", "background: purple; color: white; display: block;", character.getStats());
}

mainDecorator();
