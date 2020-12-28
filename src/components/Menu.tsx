import * as React from "react";
import { menuItems } from "../utils/constants";
import {MenuContent, MenuHeader, MenuStyle, MenuCategory, MenuCategoryItem} from "../utils/styles";
import {History} from "history";
import { GuildContext } from "../utils/contexts/GuildContext";


type MenuProps = {
    history: History;
};

export const Menu = (props: MenuProps) => {
    const {guild} = React.useContext(GuildContext);
    if (!guild) return (
    <MenuStyle>
        <MenuHeader>
            Please Select a Guild
        </MenuHeader>
    </MenuStyle>
    );
    return (
        <MenuStyle>
            <MenuHeader>
                <span>Discord Bot Dashboard</span>
            </MenuHeader>
            <MenuContent>
                {menuItems(guild.id).map((item) => (
                    <MenuCategory key={item.name}>
                        <span>{item.name}</span>
                        {item.routes.map((route) => (
                            <MenuCategoryItem key={route.name} onClick={() => props.history.push(route.path)}>
                                <span># {route.name}</span>
                            </MenuCategoryItem>
                        ))}
                    </MenuCategory>
                ))}
            </MenuContent>
        </MenuStyle>
    );
};
