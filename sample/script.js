ClassicEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( handleSampleError );

	ClassicEditor
	.create( document.querySelector( '.editor2' ), {
		// Editor configuration.
	} )
	.then( editor => {
		window.editor2 = editor;
	} )
		.catch(handleSampleError);
	


function clean()
{
	 var list = document.querySelectorAll(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred");
	
	console.log(list)
	list[0].classList.remove("ck-content");
	
	list[0].classList.remove('ck');
	list[0].classList.remove('ck-content');
	list[0].classList.remove('ck-editor__editable');
	list[0].classList.remove('ck-rounded-corners');
	list[0].classList.remove('ck-editor__editable_inline');
	list[0].classList.remove('ck-blurred');
}
function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "85mvsm48fq55-eb9g8chajgkz" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
