import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MergeTypeIcon from "@mui/icons-material/MergeType";
import AssessmentIcon from '@mui/icons-material/Assessment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PageviewIcon from '@mui/icons-material/Pageview';
import DescriptionIcon from '@mui/icons-material/Description';
import { Environment } from "../config";
import { TopMenuItem } from "./top-menu";

export const topMenuEntries: TopMenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon/>,
    roles: Environment.role.dashboard
  },
  {
    key: "matching-book",
    label: "Matching Books",
    path: "/matching-books",
    icon: <MergeTypeIcon/>,
    roles: Environment.role.matching_book
  },
  {
    key: "market-trade",
    label: "Market Trades",
    path: "/market-trades",
    icon: <ShoppingCartIcon/>,
    roles: Environment.role.market_trade
  },
  {
    key: "client-trades",
    label: "Client Trades",
    path: "/client-trades",
    icon: <AssessmentIcon/>,
    roles: Environment.role.market_trade
  },
  {
    key: "variation-margins",
    label: "Variation Margin",
    path: "/variation-margins",
    icon: <ListAltIcon/>,
    roles: Environment.role.variation_margin
  },
  {
    key: "transaction-reporting",
    label: "Transaction Reporting",
    path: "/transaction-reporting",
    icon: <PriceChangeIcon/>,
    roles: Environment.role.transaction_reporting
  },
  {
    key: "emir-reporting",
    label: "EMIR Reporting Test",
    path: "/emir-reporting",
    icon: <ListAltIcon/>,
    roles: Environment.role.emir_reporting
  },
  {
    key: "administration",
    label: "Administration",
    path: "/administration",
    icon: <AccountBalanceIcon/>,
    roles: Environment.role.administration,
    sub: [
      {
        key: "dashboard",
        label: "Monitoring",
        path: "/administration",
        icon: <DashboardIcon/>,
        roles: Environment.role.dashboard
      },
      {
        key: "mdm-management",
        label: "MDM Management Test",
        path: "/mdm-management",
        icon: <ManageAccountsIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_mdm,
      },
      {
        key: "client-trade-management",
        label: "Client Trade Management",
        path: "/client-trade-management",
        icon: <ShoppingCartIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_client_trade,
      },
      {
        key: "market-trade-management",
        label: "Market Trade Management",
        path: "/market-trade-management",
        icon: <AssessmentIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_market_trade,
      },
      {
        key: "matchingbook-management",
        label: "Matchingbook Management",
        path: "/matchingbook-management",
        icon: <MergeTypeIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_matchingbook,
      },
      {
        key: "transaction-reporting-management",
        label: "Transaction Reporting",
        path: "/transaction-reporting-management",
        icon: <ListAltIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_matchingbook,
      },
      {
        key: "variation-margin-management",
        label: "Variation Margin",
        path: "/variation-margin-management",
        icon: <PriceChangeIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_variation_margin,
      },
      {
        key: "emir-margin-reporting",
        label: "EMIR Margin Reporting",
        path: "/emir-margin-reporting",
        icon: <PriceChangeIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration,
      },
      {
        key: "emir-trade-reporting",
        label: "EMIR Trade Reporting",
        path: "/emir-trade-reporting",
        icon: <AssessmentIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration,
      },
      {
        key: "emir-position-reporting",
        label: "EMIR Position Reporting",
        path: "/emir-position-reporting",
        icon: <PageviewIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration,
      },
      {
        key: "release-notes",
        label: "Release Note Management",
        path: "/release-notes",
        icon: <DescriptionIcon style={{ fontSize: 20 }} />,
        roles: Environment.role.administration_release_notes,
      }
    ]
  }
];
