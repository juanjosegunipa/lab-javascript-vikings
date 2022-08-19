// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`

    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let saxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        let vikingIndex = Math.floor(this.vikingArmy.length * Math.random());

        let saxonHealth = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack());
        if (this.saxonArmy[saxonIndex].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[saxonIndex], 1);
        }
        return saxonHealth;
    }
    saxonAttack() {
        let saxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        let vikingIndex = Math.floor(this.vikingArmy.length * Math.random());

        let vikingHealth = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());
        if (this.vikingArmy[vikingIndex].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[vikingIndex], 1);
        }
        return vikingHealth;
    }
    showStatus() {
        if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`
        } else if (!this.vikingArmy.length) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
