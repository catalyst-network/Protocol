<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Rpc.proto

namespace Catalyst\Protocol\Rpc\Node;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Protobuf type <code>Catalyst.Protocol.Rpc.Node.CreateWalletResponse</code>
 */
class CreateWalletResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * <code>string query = 1;</code>
     */
    private $query = '';

    public function __construct() {
        \GPBMetadata\Rpc::initOnce();
        parent::__construct();
    }

    /**
     * <code>string query = 1;</code>
     */
    public function getQuery()
    {
        return $this->query;
    }

    /**
     * <code>string query = 1;</code>
     */
    public function setQuery($var)
    {
        GPBUtil::checkString($var, True);
        $this->query = $var;
    }

}

