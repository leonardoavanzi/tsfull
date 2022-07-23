type Animal = {
    name: string;
}

type Human = {
    firstName: string;
    lastName: string;
    hasAnimal: boolean;
}

type GetRequiredInfo<T> = T extends Animal
    ? { age: number }
    : T extends Human
    ? {
        cpf: string;
    }
    : T extends { planet: string }
    ? {
        whyAreYouHere: string
    }
    : never;

export type RequiredInfoForAnimal = GetRequiredInfo<Animal>;

export type RequiredInfoForHuman = GetRequiredInfo<Human>;

export type RequiredInformationForAlien = GetRequiredInfo<{
    planet: string;
}>;

