import { TestBed } from '@angular/core/testing';

import { MyNewLibraryService } from './my-new-library.service';

describe('MyNewLibraryService', () => {
  let service: MyNewLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNewLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
