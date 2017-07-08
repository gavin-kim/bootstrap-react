"use strict";

//TODO: saveMessage(key, message.raw)

exports.hasUsername = function hasUsername(cb) {

    let text = this.message.raw;

    this.user.getVar('name', (e, name) => {
        console.log("hasUsername(): text: " + text + ", name: " + name);
        cb(null, text === name);
    });
};

exports.isYes = function isYes(cb) {
    console.log("isYes()");
    let text = this.message.raw.toLowerCase();
    let match = text.match("^(?:.*[ ,.?])?(yes|yep|yeah|sure|of course|true|confirm|confirmed)(?:[ ,.?].*)?$") !== null;
    cb(null, match);
};

exports.isNo = function isNo(cb) {
    console.log("isNo()");
    let text = this.message.raw.toLowerCase();
    let match= text.match("^(?:.*[ ,.?])?(no|nope|nah|not)(?:[ ,.?].*)?$") !== null;
    cb(null, match);
};

exports.isEmergency = function isEmergency(cb) {
    console.log("isEmergency()");
    let text = this.message.raw.toLowerCase();
    let match = text.match("^(?:.*[ ,.?])?(difficulty breathing|unusual shortness of breath|chest pain|chest pressure|upper abdominal pain|upper abdominal pressure|fainting|sudden dizziness|weakness|changes in vision|confusion|changes in mental status|sudden pain|severe pain|Uncontrolled bleeding|severe vomiting|persistent vomiting|severe diarrhea|persistent diarrhea|coughing blood|vomiting blood|suicidal feelings)(?:[ ,.?].*)?$") !== null;
    cb(null, match);
};

exports.setTopic = function setTopic(topic, cb) {
    this.user.setTopic(topic).then(() => cb(null, ''));
};