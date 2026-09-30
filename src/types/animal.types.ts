export type Sex = 'Hembra' | 'Macho';
export type AnimalType = 'Perro' | 'Gato';

export interface Animal {
  identificador: number;
  nombre: string;
  raza: string;
  edad: number;
  sexo: Sex;
  fechaIngreso: string;
  tipoAnimal: AnimalType;
}


