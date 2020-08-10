import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject('CableModel')
export class CableModel {
@JsonProperty()
id: string;
}
