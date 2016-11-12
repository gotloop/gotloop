export default Loop;

class Loop {
    constructor( {
            title = '',
            description = '',
            bpm = 123,
            duration = 0.0,
            tags = [],
            sound,
            isCommentable = true,
            isSharable = true,
            creationDate = Date.now()
        }) {

        this.title = title;
        this.bpm = bpm;
        this.duration = duration;
        this.isCommentable = isCommentable;
        this.isShareable = isShareable;
        this.creationDate = creationDate;
        this.sound = sound;
        this.tags = tags;
    }
}
    class LoopStates {
constructor(index){
    
}
}
/*
module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Loop", {
        key: {type: DataTypes.STRING, unique: true},
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        bpm: DataTypes.FLOAT,
        duration: DataTypes.FLOAT,
        isCommentable: DataTypes.BOOLEAN,
        isShareable: DataTypes.BOOLEAN,
        states: {
            type: DataTypes.ENUM,
            values: ['active', 'pending', 'deleted']
        }
    });
};*/