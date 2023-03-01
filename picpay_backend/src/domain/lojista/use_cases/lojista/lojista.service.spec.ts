import { Test, TestingModule } from '@nestjs/testing';
import { LojistaService } from './lojista.service';

describe('LojistaService', () => {
  let service: LojistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LojistaService],
    }).compile();

    service = module.get<LojistaService>(LojistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
