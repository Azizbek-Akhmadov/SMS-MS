// Auto-generated. Do not edit!

// (in-package project7.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class FollowPathResult {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.total_elapsed_time = null;
    }
    else {
      if (initObj.hasOwnProperty('total_elapsed_time')) {
        this.total_elapsed_time = initObj.total_elapsed_time
      }
      else {
        this.total_elapsed_time = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type FollowPathResult
    // Serialize message field [total_elapsed_time]
    bufferOffset = _serializer.float32(obj.total_elapsed_time, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type FollowPathResult
    let len;
    let data = new FollowPathResult(null);
    // Deserialize message field [total_elapsed_time]
    data.total_elapsed_time = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'project7/FollowPathResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fdb763de4a769f0ddee5d990c7476141';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Result
    float32 total_elapsed_time
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new FollowPathResult(null);
    if (msg.total_elapsed_time !== undefined) {
      resolved.total_elapsed_time = msg.total_elapsed_time;
    }
    else {
      resolved.total_elapsed_time = 0.0
    }

    return resolved;
    }
};

module.exports = FollowPathResult;
