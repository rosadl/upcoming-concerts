import { TestBed, inject } from '@angular/core/testing';

import { AssistantService } from './assistant.service';

describe('AssistantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssistantService]
    });
  });

  it('should be created', inject([AssistantService], (service: AssistantService) => {
    expect(service).toBeTruthy();
  }));
});
