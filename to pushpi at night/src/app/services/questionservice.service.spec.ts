import { TestBed, inject } from "@angular/core/testing";

import { QuestionService } from "./questionservice.service";

describe("QuestionserviceService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService]
    });
  });

  it(
    "should be created",
    inject([QuestionService], (service: QuestionService) => {
      expect(service).toBeTruthy();
    })
  );
});
