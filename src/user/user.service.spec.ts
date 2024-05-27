import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity'; // Certifique-se de importar a entidade User correta

describe('UserService', () => {
  let service: UsersService;
  let userRepository: ReturnType<typeof getRepositoryToken>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: User, // Substitua 'User' pela sua implementação real do repositório, se diferente
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Adicione aqui seus testes para o UserService
});