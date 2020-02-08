import * as faker from 'faker';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RandomFactoryService {
  constructor() {}
  /**
   * returns a random user.
   */
  public randomUser() {
    return {
      uuid: faker.random.uuid(),
      name: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      color: faker.internet.color(),
      description: faker.lorem.sentence(faker.random.number(40)),
    };
  }

  /**
   * returns a random comment.
   */
  public randomComment() {
    return {
      uuid: faker.random.uuid(),
      author: this.randomUser(),
      content: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
    };
  }

  /**
   * returns a random loop.
   */
  public randomLoop() {
    const nbComments = Math.floor(faker.random.number(12)),
      tempComments = [];
    for (let i = 0; i < nbComments; i++) {
      i++;
      tempComments.push(this.randomComment());
    }
    return {
      uuid: faker.random.uuid() || v4(),
      name: faker.internet.userName(),
      title: faker.lorem.sentence(faker.random.number(10)),
      description: faker.lorem.sentence(),
      author: this.randomUser(),
      bpm: Math.floor(faker.random.number(192)) + 42,
      comments: tempComments,
      loopCount: 0,
      createdAt: faker.date.recent(),
    };
  }
}
