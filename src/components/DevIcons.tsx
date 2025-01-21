import React from "react";


export const DevIcons = ({component}:{
    component: React.ElementType;
}) => {
    const Component = component;
    return (
        <Component className="size-32 md:size-36"/>
    );
}