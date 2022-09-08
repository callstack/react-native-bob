package com.<%- project.package -%>;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;

import java.util.Map;


public class <%- project.name -%>ViewManager extends SimpleViewManager<<%- project.name -%>View> {

  ReactApplicationContext mCallerContext;

  public <%- project.name -%>ViewManager(ReactApplicationContext reactContext) {
    mCallerContext = reactContext;
  }

  @Override
  public String getName() {
    return <%- project.name -%>ViewManagerImpl.NAME;
  }

  @Override
  public <%- project.name -%>View createViewInstance(ThemedReactContext context) {
    return <%- project.name -%>ViewManagerImpl.createViewInstance(context);
  }

  @Override
  public Map<String, Integer> getCommandsMap() {
    return MapBuilder.of("changeBackgroundColor", 1);
  }

  @Override
  public void receiveCommand(
    @NonNull <%- project.name -%>View view,
    String commandId,
    @Nullable ReadableArray args
  ) {
    super.receiveCommand(view, commandId, args);
    String color = args.getString(0);

    switch (commandId) {
      case "changeBackgroundColor":
        setColor(view, color);
        break;
      default: {}
    }
  }


  @ReactProp(name = "color")
  public void setColor(<%- project.name -%>View view, String color) {
    <%- project.name -%>ViewManagerImpl.setColor(view, color);
  }
}
