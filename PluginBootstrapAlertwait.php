<?php
class PluginBootstrapAlertWait{
  public static function widget_include($data){
    $element = array();
    wfPlugin::enable('include/js');
    $element[] = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/bootstrap/alertwait/alertwait.js'));    
    wfDocument::renderElement($element);
  }
}
