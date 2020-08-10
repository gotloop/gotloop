import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject('PresetModel')
export class PresetModel {
    @JsonProperty()
    public id: string;
    constructor(from: Partial<PresetModel>) {
        Object.assign(this, from);
    }
}
