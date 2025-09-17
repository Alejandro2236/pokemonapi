import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { HttpService } from '@nestjs/axios';
import { response } from 'express';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class PokemonService {

  constructor(private readonly httpService: HttpService) {}

  create(createPokemonDto: CreatePokemonDto) {
    return 'This action adds a new pokemon';
  }

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get('https://pokeapi.co/api/v2/pokemon').pipe(
        catchError((error: AxiosError) => {
          console.log(error)
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
