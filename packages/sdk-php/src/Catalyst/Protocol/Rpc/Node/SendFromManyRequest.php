<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Rpc.proto

namespace Catalyst\Protocol\Rpc\Node;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Catalyst.Protocol.Rpc.Node.SendFromManyRequest</code>
 */
class SendFromManyRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bool query = 1;</code>
     */
    private $query = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $query
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Rpc::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bool query = 1;</code>
     * @return bool
     */
    public function getQuery()
    {
        return $this->query;
    }

    /**
     * Generated from protobuf field <code>bool query = 1;</code>
     * @param bool $var
     * @return $this
     */
    public function setQuery($var)
    {
        GPBUtil::checkBool($var);
        $this->query = $var;

        return $this;
    }

}

