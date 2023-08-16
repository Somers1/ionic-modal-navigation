import { TestBed } from '@angular/core/testing';

import { MyModalControllerService } from './my-modal-controller.service';

describe('MyModalControllerService', () => {
  let service: MyModalControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyModalControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
