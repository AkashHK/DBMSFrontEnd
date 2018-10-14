$(document).ready(function(){
	$.get("/inductions/findfiles.php",function(res)
	{
		console.log(res);
		var object = JSON.parse(res);
		var webdev = object.webdev;
		//console.log(webdev);	

		var appdev = object.appdev;
		var tronix = object.tronix;
		var algos = object.algos;
        //console.log(algos.length);
 		var taskDivWebdev = $("#webdevBox");
		var taskDivAppdev = $("#appdevBox");
		var taskDivTronix = $("#tronixBox");
		var taskDivAlgos = $("#algosBox");
		for(name in webdev)
		{
			taskDivWebdev.append("<div class='taskCard'><h5>"+webdev[name]+"</h5><br><br><div class='downloadLink'><i class='fa fa-file'></i><a href='tasksFolder/webdev/"+webdev[name]+
				"' download>Click here to download the task</a></div>");

		}
		$("#webDev").append(taskDivWebdev);
		if(webdev.length == 0)
			$('#webDev').append("<p>No Tasks Uploaded Yet. Stay Tuned!</p>");
		for(name in appdev)
		{
			taskDivAppdev.append("<div class='taskCard'><h5>"+appdev[name]+"</h5><br><br><div class='downloadLink'><i class='fa fa-file'></i><a href='tasksFolder/appdev/"+appdev[name]+
				"' download>Click here to download the task</a></div>");

		}
		$("#appDev").append(taskDivAppdev);
		if(appdev.length == 0)
			$('#appDev').append("<p>No Tasks Uploaded Yet. Stay Tuned!</p>");
		for(name in tronix)
		{
			taskDivTronix.append("<div class='taskCard'><h5>"+tronix[name]+"</h5><br><br><div class='downloadLink'><i class='fa fa-file'></i><a href='tasksFolder/tronix/"+tronix[name]+
				"' download>Click here to download the task</a></div>");

		}
		$("#tronix").append(taskDivTronix);
		if(tronix.length == 0)
			$('#tronix').append("<p>No Tasks Uploaded Yet. Stay Tuned!</p>");
		for(name in algos)
		{
			taskDivAlgos.append("<div class='taskCard'><h5>"+algos[name]+"</h5><br><br><div class='downloadLink'><i class='fa fa-file'></i><a href='tasksFolder/algos/"+algos[name]+
				"' download>Click here to download the task</a></div>");

		}
		$("#algorithms").append(taskDivAlgos);
        if(algos.length == 0)
			$('#algorithms').append("<p>No Tasks Uploaded Yet. Stay Tuned!</p>");
	});
	
});
