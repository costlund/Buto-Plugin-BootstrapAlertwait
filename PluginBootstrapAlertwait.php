<?php
class PluginBootstrapAlertWait{
  public static function widget_include($data){
    $element = array();
    $element[] = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/bootstrap/alertwait/alertwait.js', 'type' => 'text/javascript'));
    wfDocument::renderElement($element);
  }
}
