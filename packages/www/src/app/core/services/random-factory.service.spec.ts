import { TestBed } from "@angular/core/testing";

import { RandomFactoryService } from "./random-factory.service";

describe("RandomFactoryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: RandomFactoryService = TestBed.get(RandomFactoryService);
    expect(service).toBeTruthy();
  });

  const seeds: string[] = [
    "ABCD", "YOLO", "TEST"
  ];

  seeds.forEach(seed => {
   describe(`seed(${seed}):`, () => {
     /*
      it('', () => {
        expect().toBeDefined();
      });
      */
   });
  });
});
