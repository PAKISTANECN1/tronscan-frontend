import React, {Fragment, useState, useEffect} from "react";
import {tu} from "../../../../utils/i18n";
import { Icon, Tooltip } from "antd";
import { upperFirst } from "lodash";
import {AddressLink, ExternalLink, ContractLink, TokenTRC20Link} from "../../../common/Links";
import {TRXPrice} from "../../../common/Price";
import {ONE_TRX, CONTRACT_ADDRESS_USDT, CONTRACT_ADDRESS_WIN, CONTRACT_ADDRESS_GGC, TRADINGMAP, SUNWEBCONFIG, IS_SUNNET} from "../../../../constants";
import rebuildList from "../../../../utils/rebuildList";
import BandwidthUsage from './common/BandwidthUsage'
import {TransationTitle} from './common/Title'
import {injectIntl} from "react-intl";
import Field from "../../../tools/TransactionViewer/Field";

export default function ProposalApproveContract({contract}){
  return(
    <Fragment>
      <TransationTitle contractType={contract.contractType}></TransationTitle>
      <table className="table">
          <tbody>
          <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
          <Field label="URL">{contract.url}</Field>
          {
            contract.cost && <BandwidthUsage cost={contract.cost}></BandwidthUsage>
          }
          </tbody>
      </table>
    </Fragment>
  )
}
