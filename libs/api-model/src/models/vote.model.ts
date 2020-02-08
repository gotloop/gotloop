import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject()
class VoteModel {
    
    @JsonProperty()
    public id: string;

}

export default VoteModel;
