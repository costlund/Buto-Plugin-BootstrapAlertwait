# Buto-Plugin-BootstrapAlertwait
Display an alert-wait modal when user has to wait.


Show small modal with animated wait image. This plugin works automatic with plugin form/form_v1 if widget is included.


## Javascript

Include in html head section.

```
type: widget
data:
  plugin: bootstrap/alertwait
  method: include            
```

Run alertwait.
```
PluginBootstrapAlertwait.run();
```

Run alertwait with a method to run when modal is shown.
```
PluginBootstrapAlertwait.run(test);
function test(){
  alert('test');
}
```


Close modal.
```
PluginBootstrapAlertwait.close();
```
