import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('VoteModel')
class VoteModel {
    
    @JsonProperty()
    public id: string;

}

export default VoteModel;
