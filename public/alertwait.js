/**
 * 
 */
function plugin_bootstrap_alertwait(){
  /**
   * Modal json.
   */
  this.bootstrap_modal = [
      {
        type: 'div', 
        attribute: {id: 'alertwait', role: 'dialog', class: 'modal fade', style: 'marginzzz:auto;'}, 
        innerHTML: [
          {
            type: 'div', 
            attribute: {class: 'modal-dialog modal-sm', id: 'alertwait_dialog', style: 'width:53px;margin:auto;margin-top:100px;'},
            innerHTML: [
              {
                type: 'div',
                attribute: {class: 'modal-content', id: 'alertwait_content'},
                innerHTML: [
                  {type: 'div', attribute: {class: 'modal-body', id: 'alertwait_body', style: 'text-align:center'}, innerHTML: [{type: 'img', attribute: {src: '/plugin/wf/ajax/loading.gif'}} ]}
                ]
              }
            ]
          }
        ]
      }];
  /**
   * Method to call modal.
   * @param {type} callback Method to call when modal is shown.
   * @returns {undefined}
   */
  this.run = function(callback){
    if(document.getElementById("alertwait")){
      $("#alertwait").remove();
    }
    PluginWfDom.render(this.bootstrap_modal, document.body);
    $("#alertwait").modal({backdrop: 'static'});
    $('#alertwait').on('shown.bs.modal', function () {
      if((typeof callback)!='undefined'){
        callback();
      }
    })    
  }
  /**
   * Method to close modal.
   */
  this.close = function(){
    $("#alertwait").modal('hide');
  }
}
var PluginBootstrapAlertwait = new plugin_bootstrap_alertwait();