
	DZ.init({
		appId  : '394424',
		channelUrl : 'http://developers.deezer.com/examples/channel.php',
		player : {
			container : 'player',
			cover : true,
			playlist : true,
			width : 650,
			height : 300,
			onload : onPlayerLoaded
		}
	});

	function onPlayerLoaded() {
		DZ.player.playAlbum(301775);
	}

	async function findTrack(){
		var trackName = document.getElementsByName("nameMusic")[0].value;
		search(trackName);
	}


	function search(term){
		DZ.api('/search?q=' + term, function(response){
			let tracks = new Array();
			response.data.forEach(element => {
				tracks.push(element.id);
			});
			DZ.player.playTracks(tracks);
		});
	}


    
