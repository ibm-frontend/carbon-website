---
title: Common Actions
---

**Common actions** are frequently used actions that appear multiple times across different components and workflows. For platform consistency, these actions should only be applied in the ways described below.

<anchor-links>
<ul>
    <li><a data-scroll href="#cancel">Cancel</a></li>
    <li><a data-scroll href="#clear">Clear</a></li>
    <li><a data-scroll href="#close">Close</a></li>
    <li><a data-scroll href="#delete">Delete</a></li>
    <li><a data-scroll href="#remove">Remove</a></li>
    <li><a data-scroll href="#reset">Reset</a></li>
    <li><a data-scroll href="#add">Add</a></li>
    <li><a data-scroll href="#copy">Copy</a></li>
    <li><a data-scroll href="#edit">Edit</a></li>
    <li><a data-scroll href="#next">Next</a></li>
    <li><a data-scroll href="#refresh">Refresh</a></li>
</ul>
</anchor-links>

## Regressive actions

### Cancel

**Cancel** stops the current action and closes the component or item. The user should be warned of any possible negative consequences of stopping an action from progressing, such as data corruption or data loss.

**Usage:** Use a _secondary button_ or a _link_.

<image-component cols="8" caption='"Cancel" action as a button.'>

![Example of cancel in a modal](images/common-action-1.png)

</image-component>

### Clear

This action clears data from fields or removes selections. _Clear_ can also delete the contents of a document, such as a log. Typically, the default selection or value is reset for controls that have a default selection or value, such as radio buttons.

**Usage:** Use the `x` icon on the right side of a field, item, or value.

<image-component cols="8" caption='"Clear" action in multi-select dropdown (top) and in search (bottom).'>

![Example of clear in Multi-select Dropdown and in Search](images/common-action-2.png)

</image-component>

### Close

This action closes the current page, window, or menu. One example is closing a secondary window containing help. _Close_ is also used to dismiss information, such as notifications.

**Usage:** Use the `close` icon, which is typically placed on the upper right side of the element. Do not use _close_ in a button.

<image-component cols="8" caption='"Close" action in an inline notification.'>

![Example of close in an inline notification](images/common-action-3.png)

</image-component>

### Delete

This action eradicates an existing object. _Delete_ actions cannot be easily undone and are typically permanent. The user should be warned of the negative consequences of destroying an object, such as loss of data.

**Usage:** Use either the `delete` "trash can" icon, a _danger button_, or a danger option in a menu. A _danger modal_ is used when a warning is needed to confirm an action.

<image-component cols="8" caption='"Delete" action in a modal (top) and an overflow menu (bottom).'>

![Example of delete in a Modal and Overflow Menu](images/common-action-4.png)

</image-component>

### Remove

This action removes an object from a list or item; however, the object is not destroyed as a result of the action. Multiple objects can be removed at once.

**Usage:** Use as a _button_ or `subtract` icon or glyph.

<image-component cols="8" caption='"Remove" action as an icon.'>

![Example of Remove in a Structured List](images/common-action-5.png)

</image-component>

### Reset

This action reverts values back to their last saved state. The last saved state includes the values stored the last time the user clicked or triggered "Apply."

**Usage:** Typically applied as a _link_.

<image-component cols="8" caption='"Reset" action in a filter.'>

![Example of reset in a filter](images/common-action-6.png)

</image-component>

## Progressive actions

### Add

This action adds an existing object to a list, set, or system. For example, adding a document to a folder.

**Usage:** Use a _primary button_, _button with icon_, `add--glyph` or `add--outline` icon.

<image-component cols="8" caption='"Add" action as a button with icon in a data table.'>

![Example of add as a Button with Icon in a Data Table](images/common-action-7.png)

</image-component>

### Copy

Creates a new identical instance of the selected object(s) in a specific destination.

**Usage:** Use the `copy` icon with the confirmation "copied" tooltip appearing post-click.

<image-component cols="8" caption='"Copy" action as an icon with tooltip in a code snippet.'>

![Example of copy in a Code Snippet](images/common-action-8.png)

</image-component>

### Edit

This action allows data or values to be changed. _Edit_ commonly triggers a state change to the targeted object or input item.

**Usage:** Use as an option in a menu, or as a _button_ or `edit` icon.

<image-component cols="8">

![Example of edit in a Data Table cell](images/common-action-9.png)

</image-component>

<image-component cols="8" caption='Example of "edit" options for a data table cell and overflow menu.'>

![Example of edit in an Overflow Menu](images/common-action-10.png)

</image-component>

### Next

Advances the user to the next step in a sequence of steps, such as in a wizard.

**Usage:** Use a _button with icon_ or a standalone `forward` icon.

<image-component cols="8" caption='"Next" action as a button with icon in a wizard.'>

![Example of next as a Button with Icon](images/common-action-11.png)

</image-component>

### Refresh

This action reloads the view of an object, list, or data set when the displayed view has become unsynchronized with the source.

**Usage:** Use the `refresh` icon or a _button_.

<image-component cols="8" caption='"Refresh" action as a ghost button with icon in the action bar of a data table.'>

![Example of edit in a Data Table cell](images/common-action-12.png)

</image-component>
