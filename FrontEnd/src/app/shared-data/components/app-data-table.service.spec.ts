import { TestBed } from '@angular/core/testing';

import { AppDataTableService } from './app-data-table.service';

describe('AppDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDataTableService = TestBed.get(AppDataTableService);
    expect(service).toBeTruthy();
  });
});
