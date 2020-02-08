import { JsonProperty, JsonObject } from 'json2typescript';
import { LoopModel } from './loop.model';

@JsonObject()
export class SongModel {
  @JsonProperty({ name: 'loops', clazz: LoopModel })
  public loops: LoopModel[];
}
