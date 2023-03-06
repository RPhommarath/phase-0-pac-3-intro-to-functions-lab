describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });
describe("whisper(string)", function () {
    it("receives one argument and returns it in all lower case", function () {
      expect(whisper("hello")).toEqual("hello");
    });
  });  

  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can\'t hear you!";
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if (string === "Let\'s have dinner together!"){
        return "I would love to!";
    }
  }