let channelUrl = 'https://api.twitch.tv/kraken/users/';
let live = 'https://api.twitch.tv/kraken/streams/';
let clientId = '?client_id=hij00h6npyzr6fztla37oujfjk03qx';

let streamFrame = document.querySelector('iframe');
let streamerIcons = document.getElementById('streamerIcons');
streamerIcons.addEventListener('click',function(event){
  streamFrame.src = "http://player.twitch.tv/?channel="+event.target.id;
});

//iijeriichoii Information
let iijeriichoiiOnline = new XMLHttpRequest();
let iijeriichoiiLogo = new XMLHttpRequest();

iijeriichoiiOnline.open('GET',live+'iijeriichoii'+clientId);
iijeriichoiiLogo.open('GET', channelUrl+'iijeriichoii'+clientId);

iijeriichoiiOnline.onload = function(){
  iijeriichoiiLogo.onload = function(){
    createImg(iijeriichoiiOnline, iijeriichoiiLogo, 'iijeriichoii');
  };
  iijeriichoiiLogo.send();
};
iijeriichoiiOnline.send();

//captainsparklez Information
let captainsparklezOnline = new XMLHttpRequest();
let captainsparklezLogo = new XMLHttpRequest();

captainsparklezOnline.open('GET',live+'captainsparklez'+clientId);
captainsparklezLogo.open('GET', channelUrl+'captainsparklez'+clientId);

captainsparklezOnline.onload = function(){
  captainsparklezLogo.onload = function(){
    createImg(captainsparklezOnline, captainsparklezLogo, 'captainsparklez');
  };
  captainsparklezLogo.send();
};
captainsparklezOnline.send();

//Syndicate Information
let syndicateOnline = new XMLHttpRequest();
let syndicateLogo = new XMLHttpRequest();

syndicateOnline.open('GET',live+'syndicate'+clientId);
syndicateLogo.open('GET', channelUrl+'syndicate'+clientId);

syndicateOnline.onload = function(){
  syndicateLogo.onload = function(){
    createImg(syndicateOnline, syndicateLogo, 'syndicate');
  };
  syndicateLogo.send();
};
syndicateOnline.send();

//Tejbz Information
let tejbzOnline = new XMLHttpRequest();
let tejbzLogo = new XMLHttpRequest();

tejbzOnline.open('GET',live+'tejbz'+clientId);
tejbzLogo.open('GET', channelUrl+'tejbz'+clientId);

tejbzOnline.onload = function(){
  tejbzLogo.onload = function(){
    createImg(tejbzOnline, tejbzLogo, 'tejbz');
  };
  tejbzLogo.send();
};
tejbzOnline.send();

//Hutch Information
let hutchOnline = new XMLHttpRequest();
let hutchLogo = new XMLHttpRequest();

hutchOnline.open('GET',live+'hutch'+clientId);
hutchLogo.open('GET', channelUrl+'hutch'+clientId);

hutchOnline.onload = function(){
  hutchLogo.onload = function(){
    createImg(hutchOnline, hutchLogo, 'hutch');
  };
  hutchLogo.send();
};
hutchOnline.send();

//Northernlion Information
let northernOnline = new XMLHttpRequest();
let northernLogo = new XMLHttpRequest();

northernOnline.open('GET',live+'northernlion'+clientId);
northernLogo.open('GET', channelUrl+'northernlion'+clientId);

northernOnline.onload = function(){
  northernLogo.onload = function(){
    createImg(northernOnline, northernLogo, 'northernlion');
  };
  northernLogo.send();
};
northernOnline.send();

//Summit1g Information
let summitOnline = new XMLHttpRequest();
let summitLogo = new XMLHttpRequest();

summitOnline.open('GET',live+'summit1g'+clientId);
summitLogo.open('GET', channelUrl+'summit1g'+clientId);

summitOnline.onload = function(){
  summitLogo.onload = function(){
    createImg(summitOnline, summitLogo, 'summit1g');
  };
  summitLogo.send();
};
summitOnline.send();

//Function that places the image in the html file and places a grayscale filter depending
//on if the streamer is online or not
function createImg(onlineStatus, brand, streamer){
  let live = JSON.parse(onlineStatus.responseText);
  let icon = JSON.parse(brand.responseText);
  if(live.stream===null){
    let image = '<img src="'+icon.logo+'" class="live" id="'+streamer+'">';
    streamerIcons.insertAdjacentHTML('beforeend', image);
  }else{
    let image = '<img src="'+icon.logo+'" id="'+streamer+'">';
    streamerIcons.insertAdjacentHTML('beforeend', image);
  }
};
