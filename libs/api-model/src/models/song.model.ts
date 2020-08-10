import { JsonProperty, JsonObject } from 'json2typescript';
import { LoopModel } from './loop.model';

@JsonObject('SongModel')
export class SongModel {
  @JsonProperty({ name: 'loops', clazz: LoopModel })
  public loops: LoopModel[];
}
