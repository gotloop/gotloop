import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject()
export class SoundModel {
  
  @JsonProperty()
  public id: string;
  public data: any[];
  source: "local" | "remote" | "soundcloud" | "youtube";
  splitStartTime: number;
  splitEndTime: number;
}
