<?php
/**
<p>Bootstrap alet wait.</p>
<p>Show small modal with animated wait image. This plugin works automatic with PluginWfForm_v2.</p>
 */
class PluginBootstrapAlertWait{
  /**
  <p>Include this widget in head section.</p>
  #code-javascript#
  #load:[app_dir]/plugin/bootstrap/alertwait/public/alertwait.js:load#
  #code#
  */
  public static function widget_include($data){
    $element = array();
    $element[] = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/bootstrap/alertwait/alertwait.js', 'type' => 'text/javascript'));
    wfDocument::renderElement($element);
  }
}