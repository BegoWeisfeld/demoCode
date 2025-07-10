const host = "http://localhost:9090";
const marketTradeHost = "http://localhost:9295";
const clientTradeHost = "http://localhost:9395";
const externalMonitoringHost = "http://localhost:9110";
const matchingBookHost = "http://localhost:9297";
const mdmHost = "http://localhost:9297";
const trHost = "http://localhost:9195";
const vmHost = "http://localhost:9196";
const emrHost = "http://localhost:8080";
const eprHost = "http://localhost:8080";
const etrHost = "http://localhost:8080";

export const configTest = {
    STAGE: "test",
    version: "@BAMBOO_DEPLOY_RELEASE@",
    role: {
        all:['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        dashboard: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        user_tasks: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        market_trade: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        variation_margin: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        matching_book: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        client_trade: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        transaction_reporting: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test' ],
        emir_reporting: ['RL-Atlas-Admin-IT-Test', 'RL-Atlas-User-IT-Test'],
        administration: ['RL-Atlas-Admin-IT-Test'],
        administration_release_notes: ['RL-Atlas-Admin-IT-Test'],
        administration_mdm: ['RL-Atlas-Admin-IT-Test'],
        administration_variation_margin: ['RL-Atlas-Admin-IT-Test'],
      administration_client_trade: ['RL-Atlas-Admin-IT-Test'],
        administration_market_trade: ['RL-Atlas-Admin-IT-Test'],
        administration_matchingbook: ['RL-Atlas-Admin-IT-Test'],
        administration_transaction_reporting: ['RL-Atlas-Admin-IT-Test'],
    },
    keycloak: {
        KEYCLOAK_URL: "https://localhost/auth",
        KEYCLOAK_REALM: "Applications",
        KEYCLOAK_CLIENTID: "atlas"
    },
    hosts: {
        guiApi: host,
        marketTrade: marketTradeHost,
        matchingBook: matchingBookHost,
        clientTrade: clientTradeHost,
        mdm: mdmHost,
        transactionReporting: trHost,
        variationMargin: vmHost,
        emirMarginReporting: emrHost,
        emirPositionReporting: eprHost,
        emirTradeReporting: etrHost,
        externalMonitoring: externalMonitoringHost
    },
};