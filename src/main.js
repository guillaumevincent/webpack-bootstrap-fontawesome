import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap';

document.body.innerHTML = `
<button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">it works</button>
<br>
<i class="fa fa-fw fa-thumbs-up"></i>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">It works !</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a href="https://github.com/guillaumevincent/webpack-bootstrap-fontawesome" type="button" class="btn btn-primary">Star the project</a>
      </div>
    </div>
  </div>
</div>`;
