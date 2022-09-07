package com.<%- project.package -%>;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.viewmanagers.<%- project.name -%>ViewManagerDelegate;
import com.facebook.react.viewmanagers.<%- project.name -%>ViewManagerInterface;

import androidx.annotation.Nullable;

@ReactModule(name = <%- project.name -%>ViewManagerImpl.NAME)
public class <%- project.name -%>ViewManager extends SimpleViewManager<<%- project.name -%>View> implements <%- project.name -%>ViewManagerInterface<<%- project.name -%>View> {
  private final ViewManagerDelegate<<%- project.name -%>View> mDelegate;

  public <%- project.name -%>ViewManager(ReactApplicationContext context) {
    mDelegate = new <%- project.name -%>ViewManagerDelegate(this);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<<%- project.name -%>View> getDelegate() {
    return mDelegate;
  }

  @Override
  public String getName() {
    return <%- project.name -%>ViewManagerImpl.NAME;
  }

  @Override
  public <%- project.name -%>View createViewInstance(ThemedReactContext context) {
    return <%- project.name -%>ViewManagerImpl.createViewInstance(context);
  }

  @ReactProp(name = "color")
  public void setColor(<%- project.name -%>View view, String color) {
    <%- project.name -%>ViewManagerImpl.setColor(view, color);
  }

  @Override
  public void changeBackgroundColor(<%- project.name -%>View view, String color) {
    <%- project.name -%>ViewManagerImpl.setColor(view, color);
  }

  @Override
  public void receiveCommand(<%- project.name -%>View root, String commandId, ReadableArray args) {
    mDelegate.receiveCommand(root, commandId, args);
  }
}
