import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="mission" onClick={toggle}>
                        Mission
                    </SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>
                        Experience
                    </SidebarLink>
                    <SidebarLink to="hosting" onClick={toggle}>
                        Hosting
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign-Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;